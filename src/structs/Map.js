var Class = require('../utils/Class');

/**
 * @classdesc
 * The keys of a Map can be arbitrary values.
 * var map = new Map([
 *    [ 1, 'one' ],
 *    [ 2, 'two' ],
 *    [ 3, 'three' ]
 * ]);
 *
 * @class Map
 * @memberOf Phaser.Structs
 * @constructor
 * @since 3.0.0
 *
 * @param {array} elements - [description]
 */
var Map = new Class({

    initialize:

    function Map (elements)
    {
        /**
         * [description]
         *
         * @name Phaser.Structs.Map#entries
         * @type {object}
         * @default {}
         * @since 3.0.0
         */
        this.entries = {};

        /**
         * [description]
         *
         * @name Phaser.Structs.Map#size
         * @type {number}
         * @default 0
         * @since 3.0.0
         */
        this.size = 0;

        if (Array.isArray(elements))
        {
            for (var i = 0; i < elements.length; i++)
            {
                this.set(elements[i][0], elements[i][1]);
            }
        }
    },

    /**
     * [description]
     *
     * @method Phaser.Structs.Map#set
     * @since 3.0.0
     *
     * @param {string} key - [description]
     * @param {any} value - [description]
     *
     * @return {Phaser.Structs.Map} This Map object.
     */
    set: function (key, value)
    {
        if (!this.has(key))
        {
            this.entries[key] = value;
            this.size++;
        }

        return this;
    },

    /**
     * [description]
     *
     * @method Phaser.Structs.Map#get
     * @since 3.0.0
     *
     * @param {string} key - [description]
     *
     * @return {any} [description]
     */
    get: function (key)
    {
        if (this.has(key))
        {
            return this.entries[key];
        }
    },

    /**
     * [description]
     *
     * @method Phaser.Structs.Map#getArray
     * @since 3.0.0
     *
     * @return {array} [description]
     */
    getArray: function ()
    {
        var output = [];
        var entries = this.entries;

        for (var key in entries)
        {
            output.push(entries[key]);
        }

        return output;
    },

    /**
     * [description]
     *
     * @method Phaser.Structs.Map#has
     * @since 3.0.0
     *
     * @param {string} key - [description]
     *
     * @return {boolean} [description]
     */
    has: function (key)
    {
        return (this.entries.hasOwnProperty(key));
    },

    /**
     * [description]
     *
     * @method Phaser.Structs.Map#delete
     * @since 3.0.0
     *
     * @param {string} key - [description]
     *
     * @return {Phaser.Structs.Map} This Map object.
     */
    delete: function (key)
    {
        if (this.has(key))
        {
            delete this.entries[key];
            this.size--;
        }

        return this;
    },

    /**
     * [description]
     *
     * @method Phaser.Structs.Map#clear
     * @since 3.0.0
     *
     * @return {Phaser.Structs.Map} This Map object.
     */
    clear: function ()
    {
        Object.keys(this.entries).forEach(function (prop)
        {
            delete this.entries[prop];

        }, this);

        this.size = 0;

        return this;
    },

    /**
     * [description]
     *
     * @method Phaser.Structs.Map#keys
     * @since 3.0.0
     *
     * @return {[type]} [description]
     */
    keys: function ()
    {
        return Object.keys(this.entries);
    },

    /**
     * [description]
     *
     * @method Phaser.Structs.Map#values
     * @since 3.0.0
     *
     * @return {array} [description]
     */
    values: function ()
    {
        var output = [];
        var entries = this.entries;

        for (var key in entries)
        {
            output.push(entries[key]);
        }

        return output;
    },

    /**
     * [description]
     *
     * @method Phaser.Structs.Map#dump
     * @since 3.0.0
     */
    dump: function ()
    {
        var entries = this.entries;

        console.group('Map');

        for (var key in entries)
        {
            console.log(key, entries[key]);
        }

        console.groupEnd();
    },

    /**
     * [description]
     *
     * @method Phaser.Structs.Map#each
     * @since 3.0.0
     *
     * @param {function} callback - [description]
     *
     * @return {Phaser.Structs.Map} This Map object.
     */
    each: function (callback)
    {
        var entries = this.entries;

        for (var key in entries)
        {
            if (callback(key, entries[key]) === false)
            {
                break;
            }
        }

        return this;
    },

    /**
     * [description]
     *
     * @method Phaser.Structs.Map#contains
     * @since 3.0.0
     *
     * @param {any} value - [description]
     *
     * @return {boolean} [description]
     */
    contains: function (value)
    {
        var entries = this.entries;

        for (var key in entries)
        {
            if (entries[key] === value)
            {
                return true;
            }
        }

        return false;
    },

    /**
     * Merges all new keys from the given Map into this one
     * If it encounters a key that already exists it will be skipped
     * unless override = true.
     *
     * @method Phaser.Structs.Map#merge
     * @since 3.0.0
     *
     * @param {Phaser.Structs.Map} map - [description]
     * @param {boolean} [override=false] - [description]
     *
     * @return {Phaser.Structs.Map} This Map object.
     */
    merge: function (map, override)
    {
        if (override === undefined) { override = false; }

        var local = this.entries;
        var source = map.entries;

        for (var key in source)
        {
            if (local.hasOwnProperty(key) && override)
            {
                local[key] = source[key];
            }
            else
            {
                this.set(key, source[key]);
            }
        }

        return this;
    }

});

module.exports = Map;
