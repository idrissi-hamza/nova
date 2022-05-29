// import React from "react";
// import { useCollection } from "../hooks/useCollection";
// import Avatar from "./Avatar";

// const OnlineUsers = () => {
//   const { documents: users, error } = useCollection("users");

//   return (
//     <div className="w-52 p-7 bg-slate-200 text-slate-500 ">
//       <h2 className="justify-end mb-10 pb-5 border-b-slate-200 text-sm">
//         All Users
//       </h2>
//       {error && <div>{error}</div>}
//       {users &&
//         users.map((user) => (
//           <div
//             className="flex justify-end items-center mx-auto my-5"
//             key={user.id}
//           >
//             {user.online && (
//               <div className="w-2 h-2 mr-2 mt-1 rounded-full  bg-green-400" />
//             )}
//             <span className="mr-2">{user.displayName}</span>
//             <Avatar cls={`w-8 h-8`} src={user.photoURL} />
//           </div>
//         ))}
//     </div>
//   );
// };

// export default OnlineUsers;

import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import Avatar from "./Avatar.jsx";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    position: "absolute",
    top: -15,
    left: 14,
    width: "10px",
    height: "10px",
    borderRadius: "100%",
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export default function OnlineUsers() {
  const { user } = useAuthContext();
  const { documents: users, error } = useCollection("users");

  return (
    <Box sx={{ height: "40px", transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{
          scale: "0.6",
          position: "absolute",
          top: -8,
          left: -20,
        }}
        icon={<SpeedDialIcon openIcon={<SupervisedUserCircleIcon />} />}
        direction="Left"
        FabProps={{
          sx: {
            bgcolor: "transparent",
            "&:hover": {
              bgcolor: "transparent",
            },
          },
        }}
      >
        {users &&
          users.map((user) => (
            <SpeedDialAction
              key={user.uid}
              icon={
                user.online ? (
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  >
                    <Avatar src={user.photoURL} cls={"w-6 h-6"} />
                  </StyledBadge>
                ) : (
                  <Avatar src={user.photoURL} cls={"w-6 h-6"} />
                )
              }
              tooltipTitle={user.displayName}
            />
          ))}
      </SpeedDial>
    </Box>
    // <OnlineAvatar />
  );
}
