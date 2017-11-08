import React from 'react';
import { App, mapStateToProps } from '../index';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import { IntlProvider } from 'react-intl';

describe('<App />', () => {
  it('Expect to be render correctly', () => {
    const props = {
      buildInformation: {
        deploymentEnvironment: 'test',
        frontEndBuildNumber: 123
      },
      sampleData: [{ id: 1, name: 'test' }],
      actions: {
        getSampleData: jest.fn()
      }
    };
    const wrapper = renderer.create(
      <IntlProvider locale={'en'}>
        <MemoryRouter>
          <App {...props} />
        </MemoryRouter>
      </IntlProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  describe('mapStateToProps', () => {
    it('should return app buildinformation object', () => {
      expect(
        mapStateToProps({
          app: {
            buildInformation: {
              deploymentEnvironment: 'test',
              frontEndBuildNumber: 123
            }
          }
        }).buildInformation
      ).toEqual({
        deploymentEnvironment: 'test',
        frontEndBuildNumber: 123
      });
    });
  });
});
