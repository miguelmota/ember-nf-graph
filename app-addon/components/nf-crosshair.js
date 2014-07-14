import Ember from 'ember';
import HasGraphParent from '../mixins/graph-has-graph-parent';
import { observer } from '../utils/computed-property-helpers';

export default Ember.Component.extend(HasGraphParent, {
  tagName: 'g',
  
  isVisible: false,

  classNameBindings: ['class'],

  height: Ember.computed.alias('graph.graphHeight'),

  width: Ember.computed.alias('graph.graphWidth'),

  class: 'graph-crosshair',

  _hasGraph: observer('graph', function(graph){
    var self = this;
    graph.hoverChange(function(e, data){
      self.set('x', data.x);
      self.set('y', data.y);
      self.set('isVisible', true);
    });
    graph.hoverEnd(function(){
      self.set('isVisible', false);
    });
  })
});