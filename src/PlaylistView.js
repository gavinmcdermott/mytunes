var PlaylistView = Backbone.View.extend({

  initialize: function(){
    this.collection.on('change', this.render, this);
    this.collection.on('end', this.deQueueSong, this); 
  },

  template: _.template('<p><%= title %> </p>'),

  deQueueSong: function(){
    debugger;
    this.collection.queued()[0].unset('queuedAt');
  },
    
  render: function(){
    // modify the view's .$el here
    this.subviews = this.collection.queued().map(function(song){
      return new PlaylistEntryView({model: song});
    });
    var contents = (this.collection.queued().length === 0) ?
      "click on something" :
      this.template(this.subviews[0].model.attributes);
    var html = _(this.subviews).map(function(subview){
      return subview.render();
    })
    return this.$el.html(contents).append(html);
  }

});