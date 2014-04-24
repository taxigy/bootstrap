// Simply 'inherites' helpers from AccountsUsers
//Template.loginForm.helpers(AccountsUsers.loginFormHelpers);

// Simply 'inherites' events from AccountsUsers
//Template.loginForm.events(AccountsUsers.loginFormEvents);


Template.loginForm.helpers({
    fields: function() {
        if (AccountsUsers.ready())
            return AccountsUsers.getFields();
        return [];
    },
    Name: function() {
        return this.name.replace('_', ' ').replace('-', ' ');
    },
    buttonText: function() {
        if (AccountsUsers.getState() === 'sgin') {
            return 'Sign In';
        } else if (AccountsUsers.getState() === 'sgup') {
            return 'Sign Up';
        } else if (AccountsUsers.getState() === 'fpwd') {
            return 'Send Password';
        } else if (AccountsUsers.getState() === 'cpwd') {
            return 'Change Password';
        }
    },
    hasError: function() {
        if (AccountsUsers.ready() && AccountsUsers.getFieldError(this.name))
            return 'has-error';
        return '';
    },
    showError: function() {
        if (AccountsUsers.ready() && AccountsUsers.getFieldError(this.name))
            return '';
        return 'hide';
    },
    errorText: function() {
        if (AccountsUsers.ready())
            return AccountsUsers.getFieldError(this.name) || '';
        return '';
    }
});