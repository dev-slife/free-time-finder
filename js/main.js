export function redirect(page="home") {
    const base_url = "../pages/"
    const file_name = (page.includes(".html")) ? page: page+".html";
    const url = base_url + file_name;
    window.location.href = url;
}