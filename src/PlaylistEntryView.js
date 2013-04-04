var PlaylistEntryView = Backbone.View.extend({

  initialize: function() {
    this.model.on('change', this.render, this);
  },

  tagName: 'tr',

  template: _.template(
    '<td>(<%= artist %>)</td>' +
    '<td>' +
      '<%= title %>' +
    '</td>' +
    '<td><a href=#> remove song to queue </a></td>'
  ), 

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});

