export interface Team {
  name: string;
  coachName: string;
  players: Player[];
}

export interface Player {
  name: string;
  position: PlayerPosition;
}

export type PlayerPosition =
  | 'goalkeeper'
  | 'defender'
  | 'midfielder'
  | 'forward';

export type Field = CanvasRenderingContext2D;
