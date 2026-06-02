export const tutors = async (count) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors?limit=${count}`)
    const data = await res.json()
    console.log(data);
    return data
}