import { DashboardSettingsModule } from './dashboard-settings.module';

describe('DashboardSettingsModule', () => {
  let dashboardSettingsModule: DashboardSettingsModule;

  beforeEach(() => {
    dashboardSettingsModule = new DashboardSettingsModule();
  });

  it('should create an instance', () => {
    expect(dashboardSettingsModule).toBeTruthy();
  });
});
