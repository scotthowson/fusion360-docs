# Getting Started with Fusion 360

This guide will help you get up and running with Fusion 360, from installation to your first successful model.

## Installation and Setup

### System Requirements
- Windows 10 (64-bit) or macOS 10.14 or later
- 4 GB RAM (8 GB recommended)
- 3 GB of storage space
- DirectX 11 or later compatible graphics card

### Download and Install
1. Visit the [Autodesk Fusion 360 website](https://www.autodesk.com/products/fusion-360)
2. Sign up for a free personal account or start a trial
3. Download the installer for your operating system
4. Run the installer and follow the setup wizard

### Initial Configuration
After installation, configure these essential settings:

#### Units
- Go to **Preferences** → **Default Units**
- Set your preferred units (mm for metric, inches for imperial)

#### Cloud Storage
- Fusion 360 stores projects in the cloud by default
- Organize your projects into folders
- Consider setting up local backup if needed

## Interface Overview

### Main Workspace Areas

#### 1. **Data Panel** (Left)
- Access your projects and files
- Manage version history
- Share and collaborate

#### 2. **Toolbar** (Top)
- Contains all modeling tools
- Changes based on current workspace
- Organized by function (Create, Modify, etc.)

#### 3. **ViewCube** (Top Right)
- Navigate 3D views quickly
- Click faces to jump to standard views
- Drag to rotate the view

#### 4. **Browser** (Left Panel)
- Shows model tree structure
- Manage features, bodies, and components
- Control visibility of elements

#### 5. **Timeline** (Bottom)
- Shows modeling history
- Edit previous features
- Parametric design backbone

### Essential Workspaces

#### Design Workspace
- Primary modeling environment
- Sketch creation and 3D modeling
- Assembly design

#### Render Workspace
- Apply materials and lighting
- Create photorealistic renders
- Generate presentations

#### Manufacture Workspace
- CAM programming
- Toolpath generation
- G-code export

## Your First Model: Simple Bracket

Let's create a simple bracket to learn the basics:

### Step 1: Create a New Design
1. Click **File** → **New Design**
2. Save your design with a descriptive name

### Step 2: Create a Sketch
1. Click **Create** → **Sketch**
2. Select the **XY Plane** (or any plane)
3. You're now in Sketch mode

### Step 3: Draw the Base Shape
1. Use **Rectangle** tool to draw a 50mm × 30mm rectangle
2. Add dimensions using the **Dimension** tool
3. Click **Finish Sketch** when done

### Step 4: Extrude the Shape
1. Select your sketch
2. Click **Create** → **Extrude**
3. Set distance to 10mm
4. Click **OK**

### Step 5: Add a Hole
1. Create a new sketch on the top face
2. Draw a circle in the center
3. Dimension it to 6mm diameter
4. Extrude with **Cut** operation through the entire body

Congratulations! You've created your first Fusion 360 model.

## Next Steps

Now that you have the basics down:

1. Explore the [Modeling Basics](./modeling-basics.md) guide
2. Learn about [Parametric Design](./parametric-design.md)
3. Check out the [Keyboard Shortcuts](../references/shortcuts.md) reference

## Common Beginner Mistakes

- **Not constraining sketches properly** - Always fully constrain your sketches
- **Ignoring the timeline** - Use the timeline to edit and modify features
- **Not using parameters** - Set up parameters for design flexibility
- **Skipping sketch practice** - Master 2D sketching before complex 3D work

## Resources for Learning More

- [Autodesk Fusion 360 Learning Center](https://help.autodesk.com/view/fusion360/ENU/courses/)
- [Fusion 360 YouTube Channel](https://www.youtube.com/user/AutodeskFusion360)
- [Fusion 360 Community Forums](https://forums.autodesk.com/t5/fusion-360/ct-p/1234)

Happy modeling!