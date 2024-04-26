'use client';
import { useCallback, useState } from 'react';
import {FieldValues, useForm, SubmitHandler} from 'react-hook-form'
import Input from '@/app/components/inputs/input';
import Button from '@/app/components/inputs/Button';
import { useRouter } from 'next/navigation';
type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('REGISTER')
    const toggleVariant = useCallback(() => {
        setVariant(prev => prev === 'LOGIN' ? 'REGISTER' : 'LOGIN')
    }, [variant]);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors
        }} = useForm<FieldValues>({
        defaultValues: {
            name: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log("submitted", data)
        router.push('/chat');
    }
    return (
        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10'>
                <form className='spage-y-6' onSubmit={handleSubmit(onSubmit)}>
                    <Input id='name' label="Name" register={register} errors={errors}/>
                </form>
                <div className='mt-4'>
                    <Button
                    type='submit'
                    onClick={handleSubmit(onSubmit)}
                    fullwidth>
                        {variant === 'REGISTER' ? 'Register' : 'Login'}
                    </Button>
                </div>

            </div>
        </div>
    ) 
}

export default AuthForm;