import { trigger, state, animate, transition, style } from '@angular/animations';
import { Component, Input } from '@angular/core';

export const pageTransition =
  trigger('showPage', [
    state('on', style({ transform: 'translateY(0)' })),
    transition('void => on', [
      style({
        // transform: 'scale(0.9)',
        opacity: 0
      }),
      animate('500ms ease-in')
    ]),
    transition('on => void', [
      animate(300, style({ opacity: 0}))
    ])
  ]);
