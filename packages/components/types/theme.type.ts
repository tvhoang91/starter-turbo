export type SemanticColorName = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info';

export type SemanticShade = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950' | 'content';

export type SemanticColor = Record<SemanticShade, string>;
export type SemanticPalette = Record<SemanticColorName, SemanticColor>;
