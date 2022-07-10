import helpers from '../../helpers/my_methods';

describe('Demo spec', () => {

  it('Demo', () => {
    // Visit Demo Action site
    helpers.visitSiteDemoAction();

    // Valid Email
    helpers.typeEmail();
    helpers.clearEmail();

    // Valid Password
    helpers.typePassword();

    // Valid Fullname
    helpers.typeFullname();

    // Valid Description
    helpers.typeDescription();

    // Valid checkbox
    helpers.checkDemoCheckbox();
  });

});
