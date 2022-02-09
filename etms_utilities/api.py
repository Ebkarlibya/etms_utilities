import frappe
from frappe.frappeclient import FrappeClient

@frappe.whitelist()
def etms_site_admin_login(docname):
    etms_site = frappe.get_doc("ETMS ERP Site", docname)

    site_user = etms_site.get("site_manager_user")
    site_pass = etms_site.get_password("site_manager_pass")

    client = FrappeClient(url=f"https://{etms_site.name}", username=site_user, password=site_pass, verify=True)


    sid = client.session.cookies['sid']

    return sid
