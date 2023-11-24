import './SpringModalSheet.css';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { useState, useEffect, Children } from 'react';

export default function SpringModalSheet({ children, openState, closedState }) {

  const snapSizes = (maxHeight) => ({
    top: maxHeight - maxHeight / 10,
    bottom: maxHeight / 4,
    middle: maxHeight * 0.6,
  });

  return (
    <BottomSheet
      open={openState}
      onDismiss={closedState}
      defaultSnap={({ maxHeight }) => snapSizes(maxHeight).middle}
      snapPoints={({ maxHeight }) => [
        snapSizes(maxHeight).top,
        snapSizes(maxHeight).middle,
        snapSizes(maxHeight).bottom,
      ]}
    >{children}</BottomSheet>
  );
};