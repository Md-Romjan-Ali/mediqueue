export const tutors = async (count) => {
    const res = await fetch(`http://localhost:5000/tutors?limit=${count}`)
    const data = await res.json()
    console.log(data);
    return data
}