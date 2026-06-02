"use client"
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const DeleteTutorModal = ({ tutor }) => {
    const router = useRouter()
    const DeleteHandle = async () => {
        const { data: token } = await authClient.token()
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/${tutor._id}`, {
                        method: "DELETE",
                        headers: {
                            authorization: `Bearer ${token?.token}`
                        }
                    });

                    const data = await res.json();

                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        router.refresh()
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        });
    }

    return (
        <div className=''>
            <button className='btn btn-error btn-outline flex items-center gap-1' onClick={DeleteHandle}>
                <FaTrash />
                Delete</button>
        </div>
    );
};

export default DeleteTutorModal;