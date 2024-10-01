export const getDatas = async () => {
  try {
    // const response = await fetch('https://adminsimuladores.coovitel.coop/api/rotativos/', options)
    const response = await fetch('https://adminsimuladores.coovitel.coop/api/rotativos/', options)
    if (!response.ok) {
      throw new Error(`Http error! Status: ${response.status}`)
    }
    return response.json()
  } catch (err) {
    throw new Error("No se pudieron recuperar los datos");
  }
};

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Token c75ac915b957a299350028888cf832efa86e5b1c'
  }
}