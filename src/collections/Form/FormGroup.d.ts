import * as React from 'react';
import { SemanticWIDTHS } from '../..';

export interface FormGroupProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Fields can show related choices. */
  grouped?: boolean;

  /** Multiple fields may be inline in a row. */
  inline?: boolean;

  /** Fields Groups can specify their width in grid columns or automatically divide fields to be equal width. */
  widths?: SemanticWIDTHS | 'equal';
}

declare const FormGroup: React.StatelessComponent<FormGroupProps>;

export default FormGroup;
