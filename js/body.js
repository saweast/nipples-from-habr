$(function() {
    function _resetAnimation(els) {
        els = $(els);
        els.stop(true);
        els.each(function() {
            var el = $(this);
            if (el.parent().is('.ui-effects-wrapper'))
                el.unwrap();
            el.removeAttr('style');
        });
    }

    function _restartBounce(els) { // Нелегко вот так вот перезапустить bounce fx. Приходится изворачиваться.
        _resetAnimation(els);
        $(els).effect('bounce');
    }

    var left = $('.breast .left'), right = $('.breast .right'),
        both = left.add(right), both_all = both.add('.chest .left, .chest .right');

    both.click(function() { _restartBounce(this); });
    _restartBounce(both_all);

    $('#touch-left').click(function() { _restartBounce(left); });
    $('#touch-right').click(function() { _restartBounce(right); });
    $('#touch-both').click(function() { _restartBounce(both_all); });

    function _changeSize(size) {
        _resetAnimation(both);
        $('.breast').removeClass('size-1 size-2 size-3 size-4 size-5').addClass('size-' + size);
    }

    $('input[id^=size-]').click(function() { _changeSize(/.*-(\d)+$/.exec(this.id)[1]); });
});