type EventConfig<Events extends { kind: string }> = {
  [E in Events as E["kind"]]: (event: E) => void;
};

type SquareEvent = { kind: "square"; x: number };
type Config = EventConfig<SquareEvent>;
 
type UppercaseGreeting = "Hello world";
type UncomfortableGreeting = Uncapitalize<UppercaseGreeting>;