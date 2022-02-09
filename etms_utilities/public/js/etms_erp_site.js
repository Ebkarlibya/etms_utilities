frappe.ui.form.on("ETMS ERP Site", {
    refresh: function(frm) {
        frm.add_custom_button(frappe._("Login As Site Manager"), function(){
            frappe.call({
                method: "etms_utilities.api.etms_site_admin_login",
                args: {docname: frm.docname},
                callback: function(r) {
                    var site_url = "https://" + frm.doc.name + "/desk?sid=" + r.message;
                    window.open( site_url, "_blank").focus();

                }
            })
        })
    }
})