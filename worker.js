// push 03/09/2026 22:20:18
export default {
  async fetch(){
    return new Response("integration-tests", {
      headers: {"content-type":"text/plain"}
    })
  }
}
