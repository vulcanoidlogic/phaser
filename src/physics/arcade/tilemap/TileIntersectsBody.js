/**
 * [description]
 *
 * @function Phaser.Physics.Arcade.Tilemap.TileIntersectsBody
 * @since 3.0.0
 *
 * @param {[type]} tileWorldRect - [description]
 * @param {[type]} body - [description]
 *
 * @return {boolean} [description]
 */
var TileIntersectsBody = function (tileWorldRect, body)
{
    // Currently, all bodies are treated as rectangles when colliding with a Tile. Eventually, this
    // should support circle bodies when those are less buggy in v3.

    return !(
        body.right <= tileWorldRect.left ||
        body.bottom <= tileWorldRect.top ||
        body.position.x >= tileWorldRect.right ||
        body.position.y >= tileWorldRect.bottom
    );
};

module.exports = TileIntersectsBody;
