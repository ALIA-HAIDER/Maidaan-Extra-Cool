
import { useEffect, } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { reset } from "@/store/counterSlice";

function opsNavbar() {
    // const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const count = useSelector((state: RootState) => state.counter.value);
     
    useEffect(() => {
      dispatch(reset());
    }, []);
  return (
    <div className="w-fit">
    {count == 0 ? (
        <div className="hidden lg:flex items-center border-3 border-[#CEF23F4D] rounded-3xl gap-4 px-4 py-2">
          <NavLink
            to="/overview"
            className={({ isActive }) =>
              `hover:bg-[#CEF23F4D] py-2 px-2 rounded-3xl text-l font-bold ${
                isActive ? "text-[#CEF23F] bg-[#CEF23F4D]" : "text-[#CEF23F]"

              }`
            }
          >
            Overview
          </NavLink>
          <NavLink
            to="/tournaments"
            className={({ isActive }) =>
              `hover:bg-[#CEF23F4D] py-2 px-2 rounded-3xl text-l font-bold ${
                isActive ? "text-[#CEF23F] bg-[#CEF23F4D]" : "text-[#CEF23F]"
              }`
            }
          >
            Prizes
          </NavLink>
          <NavLink
            to="/schedule"
            className={({ isActive }) =>
              `hover:bg-[#CEF23F4D] py-2 px-2 rounded-3xl text-l font-bold ${
                isActive ? "text-[#CEF23F] bg-[#CEF23F4D]" : "text-[#CEF23F]"
              }`
            }
          >
            Schedule
          </NavLink>

        </div>
      ) : null}
      </div>
      
  )
}

export default opsNavbar