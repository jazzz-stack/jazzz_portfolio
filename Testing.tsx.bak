import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import {
  Search,
  Home,
  People,
  OndemandVideo,
  Storefront,
  Notifications,
  Message,
  Memory,
  Bookmark,
  Group,
  VideoLibrary,
  Event,
  MoreHoriz,
  Facebook,
  Games,
  Redeem,
  Public,
  Flag,
  Favorite,
  Photo,
  ArrowForward,
  ArrowBack,
} from "@mui/icons-material";

export default function Testing() {
  const [showMore, setShowMore] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "#18191A",
        color: "white",
        height: "100vh",
      }}>
      {/* Sidebar */}
      <Box sx={{ width: 250, p: 2 }}>
        <Avatar sx={{ width: 50, height: 50, mb: 2 }} src="profile.jpg" />
        <Typography>Jaswant Raj</Typography>
        <List>
          <ListItem button>
            <ListItemIcon>
              <People sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Memory sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Memories" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Bookmark sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Saved" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Group sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <VideoLibrary sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Videos" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Storefront sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Event sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Events" />
          </ListItem>
          <ListItem button onClick={() => setShowMore(!showMore)}>
            <ListItemIcon>
              <MoreHoriz sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="More" />
          </ListItem>
          <Collapse in={showMore} timeout="auto" >
            <List>
              <ListItem button>
                <ListItemIcon>
                  <Facebook sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Facebook Pay" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Message sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Messenger" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Games sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Gaming" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Redeem sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Birthday" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Public sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Climate Info Center" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Flag sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Pages" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Favorite sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Fundraisers" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Photo sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Recent Ad Activity" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1, p: 2 }}>
        {/* Top Bar */}
        <AppBar position="static" sx={{ bgcolor: "#242526" }}>
          <Toolbar>
            <IconButton color="inherit">
              <Home />
            </IconButton>
            <InputBase
              placeholder="Search Facebook"
              sx={{ ml: 2, bgcolor: "#3A3B3C", p: 1, borderRadius: 1, flex: 1 }}
            />
            <IconButton color="inherit">
              <People />
            </IconButton>
            <IconButton color="inherit">
              <OndemandVideo />
            </IconButton>
            <IconButton color="inherit">
              <Storefront />
            </IconButton>
            <IconButton color="inherit">
              <Notifications />
            </IconButton>
            <IconButton color="inherit">
              <Message />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Stories Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 2,
            backgroundImage: "url('background.jpg')",
            backgroundSize: "cover",
            p: 2,
            borderRadius: 2,
          }}>
          <IconButton>
            <ArrowBack sx={{ color: "white" }} />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              overflowX: "auto",
              whiteSpace: "nowrap",
              flexGrow: 1,
            }}>
            <Card sx={{ width: 120, mr: 2, bgcolor: "#242526" }}>
              <CardContent>
                <Avatar src="story1.jpg" sx={{ width: 80, height: 80 }} />
                <Typography variant="body2">Sofia</Typography>
              </CardContent>
            </Card>
            <Card sx={{ width: 120, mr: 2, bgcolor: "#242526" }}>
              <CardContent>
                <Avatar src="story2.jpg" sx={{ width: 80, height: 80 }} />
                <Typography variant="body2">John</Typography>
              </CardContent>
            </Card>
          </Box>
          <IconButton>
            <ArrowForward sx={{ color: "white" }} />
          </IconButton>
        </Box>

        {/* Posts Section */}
        <Card sx={{ mt: 2, bgcolor: "#242526" }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar src="user.jpg" sx={{ width: 40, height: 40, mr: 1 }} />
              <Typography variant="body2">Cristina Loughlin</Typography>
            </Box>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Post content here...
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
