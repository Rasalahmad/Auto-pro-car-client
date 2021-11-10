import React from 'react';
import { useForm } from 'react-hook-form';


const AddReview = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        if (result.insertedId) {
          alert('Palace Review Successfully!! Thank Your');
          reset();
        }
      });

  };
  return (
    <div>
      <div className="login-box w-25 m-auto mt-5">
        <h2 className="mt-5 text-center text-primary">Your Comment</h2>
        <div className="event-box border border d-flex justify-content-center align-items-center">
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <br />
              <input
                {...register("name")}
                placeholder="Name"
                type="name"
                className="p-2 m-2 w-100"
              />
              <input
                {...register("email")}
                placeholder="Your Email"
                className="p-2 m-2 w-100"
              />
              <br />
              <textArea
                {...register("description")}
                placeholder="Description"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                type="number"
                {...register("rating", { min: 0, max: 5 })}
                placeholder="Rating"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("img", { required: true })}
                placeholder="Image Link"
                className="p-2 m-2 w-100"
              />
              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" value="Add Review" className="btn btn-info w-50" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;