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
import { ContainerRule } from './parser.js';
import { ComparisonOperator } from './utils/parse-media-feature.js';
export declare const enum ExpressionType {
    Negate = 1,
    Conjunction = 2,
    Disjunction = 3,
    Comparison = 4,
    Feature = 5,
    Value = 6
}
export declare type ExpressionNode = NegateExpressionNode | ConjunctionExpressionNode | DisjunctionExpressionNode | ComparisonExpressionNode | FeatureExpressionNode | ValueExpressionNode;
export interface NegateExpressionNode {
    type: ExpressionType.Negate;
    value: ExpressionNode;
}
export interface ConjunctionExpressionNode {
    type: ExpressionType.Conjunction;
    left: ExpressionNode;
    right: ExpressionNode;
}
export interface DisjunctionExpressionNode {
    type: ExpressionType.Disjunction;
    left: ExpressionNode;
    right: ExpressionNode;
}
export interface ComparisonExpressionNode {
    type: ExpressionType.Comparison;
    operator: ComparisonOperator;
    left: ExpressionNode;
    right: ExpressionNode;
}
export interface FeatureExpressionNode {
    type: ExpressionType.Feature;
    feature: SizeFeature;
}
export interface ValueExpressionNode {
    type: ExpressionType.Value;
    value: Value;
}
export declare const enum ValueType {
    Unknown = 1,
    Number = 2,
    Dimension = 3,
    Orientation = 4,
    Boolean = 5
}
export declare type Value = UnknownValue | NumberValue | DimensionValue | OrientationValue | BooleanValue;
export interface UnknownValue {
    type: ValueType.Unknown;
}
export interface NumberValue {
    type: ValueType.Number;
    value: number;
}
export interface DimensionValue {
    type: ValueType.Dimension;
    value: number;
    unit: string;
}
export interface OrientationValue {
    type: ValueType.Orientation;
    value: 'portrait' | 'landscape';
}
export interface BooleanValue {
    type: ValueType.Boolean;
    value: boolean;
}
export declare const enum SizeFeature {
    Width = 1,
    Height = 2,
    InlineSize = 3,
    BlockSize = 4,
    AspectRatio = 5,
    Orientation = 6
}
export declare const enum ContainerType {
    None = 0,
    InlineSize = 1,
    BlockSize = 2
}
export interface SizeFeatures {
    width?: number;
    height?: number;
    blockSize?: number;
    inlineSize?: number;
}
export declare const enum WritingAxis {
    Horizontal = 0,
    Vertical = 1
}
export declare type TreeContext = {
    cqw: number | null;
    cqh: number | null;
    fontSize: number;
    rootFontSize: number;
    writingAxis: WritingAxis;
};
export declare function evaluateContainerCondition(rule: ContainerRule, context: {
    sizeFeatures: SizeFeatures;
    treeContext: TreeContext;
}): boolean | null;
