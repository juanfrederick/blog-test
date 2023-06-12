const Comment = ({ comment }) => {
  console.log(comment?.length);

  return (
    <div className="font-poppins shadow-xl px-2 py-4 rounded-lg">
      {comment?.length !== 0 ? (
        comment?.map((value) => {
          const { id, name, comment, date } = value;
          return (
            <div key={id} className="my-4 py-2 rounded-lg shadow-md px-2">
              <div className="flex justify-between">
                <h3 className="font-bold">{name}</h3>
                <p className="font-bold text-[12px]">{date}</p>
              </div>
              <p className="text-sm mt-2">{comment}</p>
            </div>
          );
        })
      ) : (
        <h1 className="text-center text-slate-300 font-bold text-sm">
          No Comment
        </h1>
      )}
    </div>
  );
};

export default Comment;
