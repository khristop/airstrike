import { +GeneralesModule } from './+generales.module';

describe('+GeneralesModule', () => {
  let +GeneralesModule: +GeneralesModule;

  beforeEach(() => {
    +GeneralesModule = new +GeneralesModule();
  });

  it('should create an instance', () => {
    expect(+GeneralesModule).toBeTruthy();
  });
});
