export interface FieldRenderer {
  container: HTMLDivElement;
  canvasContext: CanvasRenderingContext2D;
  handleOnResize: () => void;
}

export interface GameDimensions {
  x: number;
  y: number;
  width: number;
  height: number;
}

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

export interface MatchOptions {
  speed: number;
}
