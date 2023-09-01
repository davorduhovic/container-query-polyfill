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
import { Node, Parser, ParseResult } from './css.js';
export declare const enum GenericExpressionType {
    Negate = 1,
    Conjunction = 2,
    Disjunction = 3,
    Literal = 4
}
export declare type GenericExpressionNode = GenericNegateExpressionNode | GenericConjunctionExpressionNode | GenericDisjunctionExpressionNode | GenericLiteralExpressionNode;
export interface GenericNegateExpressionNode {
    type: GenericExpressionType.Negate;
    value: GenericExpressionNode;
}
export interface GenericConjunctionExpressionNode {
    type: GenericExpressionType.Conjunction;
    left: GenericExpressionNode;
    right: GenericExpressionNode;
}
export interface GenericDisjunctionExpressionNode {
    type: GenericExpressionType.Disjunction;
    left: GenericExpressionNode;
    right: GenericExpressionNode;
}
export interface GenericLiteralExpressionNode {
    type: GenericExpressionType.Literal;
    value: Node;
}
export declare function consumeMediaCondition(parser: Parser<Node>): ParseResult<GenericExpressionNode>;
export declare function consumeMediaConditionInParens(parser: Parser<Node>): ParseResult<GenericExpressionNode>;
export declare function parseMediaCondition(nodes: ReadonlyArray<Node>): ParseResult<GenericExpressionNode>;
export declare function transformMediaConditionToTokens(node: GenericExpressionNode): Node[];
