frappe.ui.form.on("ETMS ERP Site", {
    refresh: function(frm) {
        frm.add_custom_button(frappe._("Login As Site Manager"), function(){
            if(!frm.doc.site_manager_user || !frm.doc.site_manager_pass) {
                frappe.msgprint(frappe._("Please set (Site Manager User) and (Site Manager Password) first."), "ETMS Utilities");
                return;
            }
            frappe.call({
                method: "etms_utilities.api.etms_site_admin_login",
                args: {docname: frm.docname},
                callback: function(r) {
                    if(r.message) {
                        var site_url = "https://" + frm.doc.name + "/desk?sid=" + r.message;
                        window.open( site_url, "_blank").focus();
                    }
                }
            })
        })
    }
})