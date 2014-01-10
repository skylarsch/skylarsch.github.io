---
layout: post
title: "Drawing A Line"
date: 2013-12-03 13:07:24
---

Core Graphics is an incredibly powerful tool.  While it's primarily a C level API it's still fairly easy and strait forward to use.  That's not to say the Objective-C wrappers aren't fantastic, but sometimes you need to do just a bit more than the wrappers can allow.

So, lets take a look at drawing a line under a users finger.

The first thing you'll need is a UIView subclass.  In the header we'll declare a `CGMutablePathRef` and a `CGPoint`.  This will give us our path and a way to find changed rect.

{% highlight objc %}
@property (nonatomic) CGMutablePathRef drawingPath;
@property (nonatomic) CGPoint lastPoint;
{% endhighlight %}

In the implementation file you need create and add a `UIPanGestureRecognizer` to the view.  In the target there are three states you're concerned with.

- `UIGestureRecognizerStateBegan`
- `UIGestureRecognizerStateChanged`
- `UIGestureRecognizerStateEnded`

When the state is began we'll check the `_drawingPath` to see if it exists.  If it does, release it and set it to `NULL`.

{% highlight objc %}
if (_drawingPath != NULL) {
	CGPathRelease(_drawingPath);
	_drawingPath = NULL;
}
_lastPoint = CGPointZero;
{% endhighlight %}

In that same section we set the `_lastPoint` to zero because the user has just started drawing.

{% highlight objc %}
_drawingPath = CGPathCreateMutable();
{% endhighlight %}

Create a new mutable path.  __Core Graphic objects aren't managed by ARC.__  So you'll want to be sure to release the path in `dealloc`

{% highlight objc %}
- (void)dealloc {
	if (_drawingPath != NULL) {
        CGPathRelease(_drawingPath);
        _drawingPath = NULL;
    }
}
{% endhighlight %}

We want to check if it exists before releasing or else we'll release NULL and things will go horribly wrong.

Now that we have a path, we need to add the first point.

{% highlight objc %}
CGPoint point = [panner locationInView:self];
CGPathMoveToPoint(_drawingPath, nil, point.x, point.y);
{% endhighlight %}

This moves the start of the line to the current drawing point for the touch.

Now it's time to handle the moves.

{% highlight objc %}
CGPoint point = [panner locationInView:self];
CGPathAddLineToPoint(_drawingPath, nil, point.x, point.y);
{% endhighlight %}

Instead of moving the the point, add a line to the point.

If you're not concerned with performance then you can just call `setNeedsDisplay` but there is a better way to handle that.

{% highlight objc %}
if (CGPointEqualToPoint(_lastPoint, CGPointZero)) {
	[self setNeedsDisplay];
} else {
	CGRect render = DrawViewCGRectFromPointsMinimumSize(_lastPoint, point, CGSizeMake(DrawLineWidth, DrawLineWidth));
	[self setNeedsDisplayInRect:UIEdgeInsetsInsetRect(render, UIEdgeInsetsMake(-DrawLineWidth, -DrawLineWidth, -DrawLineWidth, -DrawLineWidth))];
}
_lastPoint = point;
{% endhighlight %}

What's going on here?  If we don't have a `_lastPoint` redraw the full view.  If we do, figure out the rect for the change and only redraw that part of the view.

All of that is fairly standard.  Add points under the users finger and redraw.  But what about saving that line to some kind of file/data structure?

Well, we could create mutable array and store all the points from the path, but that just seems kinda sketchy.  So we'll use [CGPathApply](https://developer.apple.com/library/ios/documentation/GraphicsImaging/Reference/CGPath/Reference/reference.html#//apple_ref/c/func/CGPathApply) to get the points in the path and add them to an array after the user has finished drawing the line.

`CGPathApply` is fairly simple.

Above the `@implementation` we'll define a new function.  It takes a path, a void pointer, and function point as arguments.

{% highlight objc %}
NSMutableArray *array = [NSMutableArray array];
CGPathApply(_drawingPath, (__bridge void *)(array), &GetArrayPoints_CGPathApplierFunc);
{% endhighlight %}

This will loop through each of the elements in the path and call them on the function `GetArrayPoints_CGPathApplierFunc`.

`GetArrayPoints_CGPathApplierFunc` Is very simple.

{% highlight objc %}
void GetArrayPoints_CGPathApplierFunc(void *info, const CGPathElement *element) {
    NSMutableArray *array = (__bridge NSMutableArray *)info;
    if (element->type == kCGPathElementMoveToPoint || element->type == kCGPathElementAddLineToPoint) {
        CGPoint point = element->points[0];
        [array addObject:[NSValue valueWithCGPoint:point]];
    }
}
{% endhighlight %}

In this case we're only concerned with move & line points.  We get the `CGPoint` and add it to the array that's passed in `info`.

Now you can do anything with the array of points.

Drawing if fairly strait forward as well.

{% highlight objc %}
- (void)drawRect:(CGRect)rect {
    if (_drawingPath != NULL) {
        CGContextRef ctx = UIGraphicsGetCurrentContext();
        CGContextSaveGState(ctx);

        CGContextSetLineWidth(ctx, DrawLineWidth);
        CGContextSetLineCap(ctx, kCGLineCapRound);
        CGContextSetLineJoin(ctx, kCGLineJoinRound);
        CGContextSetMiterLimit(ctx, 2.0);

        CGContextSetStrokeColorWithColor(ctx, [[UIColor orangeColor] CGColor]);

        CGContextAddPath(ctx, _drawingPath);
        CGContextDrawPath(ctx, kCGPathStroke);

        CGContextRestoreGState(ctx);
    }
}
{% endhighlight %}

If we have a path we'll draw it.

Start by getting a ref to the current context.  We'll save the state of the context so the changes we make don't affect any other drawing we may be doing.  Setup the line then add the path to the context.  Next we'll draw the path into the context, and restore the context to it's pre line drawing state.

[Putting it all together](https://gist.github.com/skylarsch/7778066)

<script src="https://gist.github.com/skylarsch/7778066.js"></script>
