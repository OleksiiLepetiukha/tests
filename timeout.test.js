const timeoutCall = require('./app');



describe("Practicing with tests", () => {
    jest.useFakeTimers();
    it('Check timeoutResult', () => {
    timeoutCall();
      jest.runAllTimers(1);
      expect(timeoutResult).toBe('finished');
    });
  });