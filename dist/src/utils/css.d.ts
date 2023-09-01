/**
 * Copyright 2022 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export declare const enum HashFlag {
    UNRESTRICTED = 0,
    ID = 1
}
export declare const enum NumberFlag {
    INTEGER = 0,
    NUMBER = 1
}
export declare type Node = EOFToken | WhitespaceToken | StringToken | BadStringToken | LeftParenthesisToken | RightParenthesisToken | CommaToken | ColonToken | SemicolonToken | LeftSquareBracketToken | RightSquareBracketToken | LeftCurlyBracketToken | RightCurlyBracketToken | DelimToken | HashToken | DimensionToken | PercentageToken | NumberToken | CDOToken | CDCToken | URLToken | BadURLToken | AtKeywordToken | FunctionToken | IdentToken | AtRuleNode | QualifiedRuleNode | FunctionNode | BlockNode | DeclarationNode;
export declare const enum Type {
    EOFToken = 0,
    WhitespaceToken = 1,
    StringToken = 2,
    BadStringToken = 3,
    LeftParenthesisToken = 4,
    RightParenthesisToken = 5,
    CommaToken = 6,
    ColonToken = 7,
    SemicolonToken = 8,
    LeftSquareBracketToken = 9,
    RightSquareBracketToken = 10,
    LeftCurlyBracketToken = 11,
    RightCurlyBracketToken = 12,
    DelimToken = 13,
    HashToken = 14,
    DimensionToken = 15,
    PercentageToken = 16,
    NumberToken = 17,
    CDOToken = 18,
    CDCToken = 19,
    URLToken = 20,
    BadURLToken = 21,
    AtKeywordToken = 22,
    FunctionToken = 23,
    IdentToken = 24,
    AtRuleNode = 25,
    QualifiedRuleNode = 26,
    FunctionNode = 27,
    BlockNode = 28,
    DeclarationNode = 29
}
export interface EOFToken {
    type: Type.EOFToken;
}
export interface WhitespaceToken {
    type: Type.WhitespaceToken;
}
export interface StringToken {
    type: Type.StringToken;
    value: string;
}
export interface BadStringToken {
    type: Type.BadStringToken;
}
export interface LeftParenthesisToken {
    type: Type.LeftParenthesisToken;
}
export interface RightParenthesisToken {
    type: Type.RightParenthesisToken;
}
export interface CommaToken {
    type: Type.CommaToken;
}
export interface ColonToken {
    type: Type.ColonToken;
}
export interface SemicolonToken {
    type: Type.SemicolonToken;
}
export interface LeftSquareBracketToken {
    type: Type.LeftSquareBracketToken;
}
export interface RightSquareBracketToken {
    type: Type.RightSquareBracketToken;
}
export interface LeftCurlyBracketToken {
    type: Type.LeftCurlyBracketToken;
}
export interface RightCurlyBracketToken {
    type: Type.RightCurlyBracketToken;
}
export interface DelimToken {
    type: Type.DelimToken;
    value: string;
}
export interface HashToken {
    type: Type.HashToken;
    value: string;
    flag: HashFlag;
}
export interface DimensionToken {
    type: Type.DimensionToken;
    value: string;
    flag: NumberFlag;
    unit: string;
}
export interface PercentageToken {
    type: Type.PercentageToken;
    value: string;
}
export interface NumberToken {
    type: Type.NumberToken;
    value: string;
    flag: NumberFlag;
}
export interface CDOToken {
    type: Type.CDOToken;
}
export interface CDCToken {
    type: Type.CDCToken;
}
export interface URLToken {
    type: Type.URLToken;
    value: string;
}
export interface BadURLToken {
    type: Type.BadURLToken;
}
export interface AtKeywordToken {
    type: Type.AtKeywordToken;
    value: string;
}
export interface FunctionToken {
    type: Type.FunctionToken;
    value: string;
}
export interface IdentToken {
    type: Type.IdentToken;
    value: string;
}
export interface AtRuleNode {
    type: Type.AtRuleNode;
    name: string;
    prelude: Node[];
    value: BlockNode | null;
}
export interface QualifiedRuleNode {
    type: Type.QualifiedRuleNode;
    prelude: Node[];
    value: BlockNode;
}
export interface FunctionNode {
    type: Type.FunctionNode;
    name: string;
    value: Node[];
}
export interface BlockNode {
    type: Type.BlockNode;
    source: Node;
    value: Block;
}
export interface DeclarationNode {
    type: Type.DeclarationNode;
    name: string;
    value: Node[];
    important: boolean;
}
export declare const enum BlockType {
    SimpleBlock = 0,
    StyleBlock = 1,
    DeclarationList = 2,
    RuleList = 3
}
export declare type Block = SimpleBlock | StyleBlock | DeclarationListBlock | RuleListBlock;
export interface SimpleBlock {
    type: BlockType.SimpleBlock;
    value: Node[];
}
export interface StyleBlock {
    type: BlockType.StyleBlock;
    value: Array<AtRuleNode | QualifiedRuleNode | DeclarationNode>;
}
export interface DeclarationListBlock {
    type: BlockType.DeclarationList;
    value: Array<AtRuleNode | DeclarationNode>;
}
export interface RuleListBlock {
    type: BlockType.RuleList;
    value: Array<AtRuleNode | QualifiedRuleNode>;
}
export interface Parser<T> {
    value: T;
    errorIndices: number[];
    index: number;
    at(offset: number): T;
    consume(count: number): T;
    reconsume(): void;
    error(): void;
}
export declare const PARSE_ERROR: unique symbol;
export declare type ParseResult<T> = NonNullable<T> | typeof PARSE_ERROR;
export declare const enum CodePoints {
    EOF = -1,
    NULL = 0,
    BACKSPACE = 8,
    CHARACTER_TABULATION = 9,
    NEWLINE = 10,
    LINE_TABULATION = 11,
    FORM_FEED = 12,
    CARRIAGE_RETURN = 13,
    SHIFT_OUT = 14,
    INFORMATION_SEPARATOR_ONE = 31,
    SPACE = 32,
    EXCLAMATION_MARK = 33,
    QUOTATION_MARK = 34,
    NUMBER_SIGN = 35,
    PERCENTAGE_SIGN = 37,
    APOSTROPHE = 39,
    LEFT_PARENTHESIS = 40,
    RIGHT_PARENTHESIS = 41,
    PLUS_SIGN = 43,
    COMMA = 44,
    HYPHEN_MINUS = 45,
    FULL_STOP = 46,
    COLON = 58,
    SEMICOLON = 59,
    LESS_THAN_SIGN = 60,
    GREATER_THAN_SIGN = 62,
    COMMERCIAL_AT = 64,
    LEFT_SQUARE_BRACKET = 91,
    REVERSE_SOLIDUS = 92,
    RIGHT_SQUARE_BRACKET = 93,
    LOW_LINE = 95,
    DIGIT_ZERO = 48,
    DIGIT_NINE = 57,
    LATIN_CAPITAL_LETTER_A = 65,
    LATIN_CAPITAL_LETTER_E = 69,
    LATIN_CAPITAL_LETTER_F = 70,
    LATIN_CAPITAL_LETTER_Z = 90,
    LATIN_SMALL_LETTER_A = 97,
    LATIN_SMALL_LETTER_E = 101,
    LATIN_SMALL_LETTER_F = 102,
    LATIN_SMALL_LETTER_Z = 122,
    LEFT_CURLY_BRACKET = 123,
    RIGHT_CURLY_BRACKET = 125,
    DELETE = 127,
    CONTROL = 128,
    ASTERISK = 42,
    SOLIDUS = 47,
    SURROGATE_START = 55296,
    SURROGATE_END = 57343,
    REPLACEMENT_CHARACTER = 65533,
    MAX = 1114111
}
export declare function createNodeParser(nodes: ReadonlyArray<Node>): Parser<Node>;
/**
 * Returns a stream of tokens according to CSS Syntax Module Level 3
 * (https://www.w3.org/TR/css-syntax-3/)
 */
export declare function tokenize(source: string): Generator<Node>;
export declare function parseStylesheet(nodes: ReadonlyArray<Node>, topLevel?: boolean): RuleListBlock;
export declare function parseComponentValue(nodes: ReadonlyArray<Node>): Node[];
export declare function parseDeclaration(nodes: ReadonlyArray<Node>): ParseResult<DeclarationNode>;
export declare function parseStyleBlock(nodes: ReadonlyArray<Node>): StyleBlock;
export declare function parseDeclarationList(nodes: ReadonlyArray<Node>): DeclarationListBlock;
export declare function consumeWhitespace(parser: Parser<Node>): void;
export declare function isEOF(parser: Parser<Node>): boolean;
export declare function serializeBlock(block: Block, level?: number): string;
export declare function serialize(node: Node): string;
