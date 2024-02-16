import React, { ReactNode } from 'react';

export type PostTemplateProps = {
  title: string;
  image: string;
  CTName: string;
  CTPath: string;
  CTColor: string;
  children: ReactNode;
};
