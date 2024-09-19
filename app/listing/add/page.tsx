export default function AddListing() {
  return (
    <section>
      <h1 className="text-3xl">Add Listing</h1>

      <form
        className="flex flex-col items-start gap-4"
        action="/api/add"
        method="POST">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Address</span>
          </div>
          <input
            type="text"
            placeholder="123 Broadway Road"
            className="input input-bordered w-full max-w-xs"
            name="address"
            id="address"
          />
        </label>

        <div className="grid grid-cols-2 gap-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">City</span>
            </div>
            <input
              type="text"
              placeholder="Boston"
              className="input input-bordered w-full max-w-xs"
              name="city"
              id="city"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">State</span>
            </div>
            <input
              type="text"
              placeholder="MA"
              className="input input-bordered w-full max-w-xs"
              name="state"
              id="state"
            />
          </label>
        </div>

        <button className="btn" type="submit">
          Add listing
        </button>
      </form>
    </section>
  )
}
