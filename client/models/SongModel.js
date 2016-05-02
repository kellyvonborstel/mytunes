// defines a backbone model class for songs
var SongModel = Backbone.Model.extend({

  play: function(){
    // triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){
    // triggering an event here will also trigger the event on the collection
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    // triggering an event here will also trigger the event on the collection
    this.trigger('dequeue', this);
  },

  ended: function(){
    // triggering an event here will also trigger the event on the collection
    this.trigger('ended', this);
  }

});
