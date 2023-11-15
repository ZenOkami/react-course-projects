import React from "react";
import ReactShallowRenderer from 'react-test-renderer/shallow'
import Header from '../../components/headerPage'

test('Should Render Header Correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();

    console.log(renderer.getRenderOutput());
})