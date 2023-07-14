(function ($, pluginName) {
    var defaults = {
        htmlClass: true
    }

    function Plugin (element, options) {
        this.element = element
        this.eventController = eventController
        this.options = $.extend({}, defaults, options)
        this.options.initialized = false
        this.init()
    }

    Plugin.prototype.init = function () {
    var mobilenavigation = this.element
    var options = this.options
    var eventController = this.eventController.bind(this)
    if (options.initialized === true) return
    eventController('loading')
    mobilenavigation.find('[data-submenu]').on('click', function (event) {
        event.preventDefault()
        var self = $(this)
        var subMenuId = self.attr('data-submenu')
        var subMenuEl = $('#' + subMenuId)
        if (!subMenuEl.length) return
        var eventDetails = {
        subMenu: true,
        menuId: subMenuId
        }
        eventController('opening', eventDetails)
        mobilenavigation.find('.submenu.current').removeClass('current')
        subMenuEl.addClass('opened current')
        !mobilenavigation.hasClass('submenu-opened') && mobilenavigation.addClass('submenu-opened')
        mobilenavigation[0].scrollTo({ top: 0 })
        eventController('opened', eventDetails)
    })

    mobilenavigation.find('[data-submenu-close]').on('click', function (event) {
        event.preventDefault()
        var self = $(this)
        var subMenuId = self.attr('data-submenu-close')
        var subMenuEl = $('#' + subMenuId)
        if (!subMenuEl.length) return
        var eventDetails = {
        subMenu: true,
        menuId: subMenuId
        }
        eventController('closing', eventDetails)
        subMenuEl.removeClass('opened current')
        mobilenavigation.find('.submenu.opened').last().addClass('current')
        !mobilenavigation.find('.submenu.opened').length && mobilenavigation.removeClass('submenu-opened')
        subMenuEl[0].scrollTo({ top: 0 })
        eventController('closed', eventDetails)
    })
    eventController('load')
    this.options.htmlClass && !$('html').hasClass('mobile-nav-initialized') && $('html').addClass('mobile-nav-initialized')
    options.initialized = true
    }

    Plugin.prototype.open = function () {
        this.eventController(
            'opening',
            { subMenu: false }
        )
        this.element.addClass('opened')
        this.options.htmlClass && $('html').addClass('mobile-nav-opened')
        this.eventController(
            'opened',
            { subMenu: false }
        )
    }

    Plugin.prototype.close = function (disableEvent) {
        !disableEvent && this.eventController('closing', { subMenu: false })
        this.element.removeClass('opened')
        this.options.htmlClass && $('html').removeClass('mobile-nav-opened')
        !disableEvent && this.eventController('closed', { subMenu: false })
    }

    Plugin.prototype.destroy = function () {
        this.eventController('destroying')
        this.close(true)
        this.element.find('.submenu.opened').removeClass('opened')
        this.element.removeData(pluginName)
        this.eventController('destroyed')
        this.options = defaults
        this.options.htmlClass && $('html').removeClass('mobile-nav-initialized')
        delete this.element
        delete this.options
        delete this.eventController
    }

    Plugin.prototype.on = function (name, handler) {
        eventBinder.call(this, name, handler)
    }

    var eventController = function (type, details) {
        if (!this.options[type]) return
        if (typeof this.options[type] !== 'function') throw Error('event handler must be a function: ' + type)
        this.options[type].call(this, this.element, this.options, details)
    }

    var getInstance = function (element, options) {
    var instance = null
    if (!element.data(pluginName)) {
        instance = new Plugin(element, options || {})
        element.data(pluginName, instance)
    } else {
        instance = element.data(pluginName)
    }
    return instance
    }

    var eventBinder = function (name, handler) {
        if (typeof name !== 'string') throw Error('event name is expected to be a string but got: ' + typeof name)
        if (typeof handler !== 'function') throw Error('event handler is not a function for: ' + name)
        this.options[name] = handler
    }

    $.fn[pluginName] = function (options) {
        var instance = getInstance($(this[0]), options)
        return instance
    }
})(window.jQuery || window.cash, 'mobilenavigation')