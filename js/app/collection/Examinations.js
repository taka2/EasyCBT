var easycbt = easycbt || {};
easycbt.collection = easycbt.collection || {};

easycbt.collection.Examinations = Backbone.Collection.extend({
  model: easycbt.model.Examination,
});
