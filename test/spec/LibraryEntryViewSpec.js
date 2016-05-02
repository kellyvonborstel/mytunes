describe('LibraryEntryView', function() {
  var view, model;

  beforeEach(function() {
    model = new SongModel({
      artist: 'Fakey McFakerson',
      title: 'Never Gonna Mock You Up',
      url: 'example/url',
    });
    view = new LibraryEntryView({model: model});
    view.render();
  });

  // The following two tests are mutually exclusive,
  // so one must be commented out for the other to pass
  it ('plays clicked songs', function(){
    sinon.spy(SongModel.prototype, 'play');

    view.$el.children().first().click();
    expect(model.play).to.have.been.called;

    SongModel.prototype.play.restore();
  });

  // it('queues clicked songs', function(){
  //   sinon.spy(SongModel.prototype, 'enqueue');

  //   view.$el.children().first().click();
  //   expect(model.enqueue).to.have.been.called;

  //   SongModel.prototype.enqueue.restore();
  // });

});
