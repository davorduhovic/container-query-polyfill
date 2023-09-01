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
import { ExpressionNode, SizeFeature } from './evaluate.js';
import { Node, Parser, ParseResult } from './utils/css.js';
export interface ContainerRule {
    name: string | null;
    condition: ExpressionNode;
    features: Set<SizeFeature>;
}
export interface ContainerRuleContext {
    features: Set<SizeFeature>;
}
declare type ContainerNamesResult = string[];
declare type ContainerTypesResult = string[];
export declare function isContainerStandaloneKeyword(name: string): boolean;
export declare function consumeContainerNameProperty(parser: Parser<Node>, standalone: boolean): ParseResult<ContainerNamesResult>;
export declare function consumeContainerTypeProperty(parser: Parser<Node>, standalone: boolean): ParseResult<ContainerTypesResult>;
export declare function parseContainerShorthand(nodes: ReadonlyArray<Node>): ParseResult<[ContainerNamesResult, ContainerTypesResult]>;
export declare function parseContainerRule(nodes: ReadonlyArray<Node>): ParseResult<ContainerRule>;
export {};
