import { DashboardSettingsRoutingModule } from './dashboard-settings-routing.module';

describe('DashboardSettingsRoutingModule', () => {
  let dashboardSettingsRoutingModule: DashboardSettingsRoutingModule;

  beforeEach(() => {
    dashboardSettingsRoutingModule = new DashboardSettingsRoutingModule();
  });

  it('should create an instance', () => {
    expect(dashboardSettingsRoutingModule).toBeTruthy();
  });
});
