import React from 'react';
import { Component } from 'react';

export class Component3a extends React.Component {
  render() {
    return React.createElement('div', null);
  }
}

Component3a.displayName = 'Component3a';
export default class Component3b extends React.Component {
  render() {
    return React.createElement('div', null);
  }
}

Component3b.displayName = 'Component3b';
export class Component3c extends Component {
  render() {
    return React.createElement('div', null);
  }
}
Component3c.displayName = 'Component3c';
