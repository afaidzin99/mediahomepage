<?php

namespace App\Http\Controllers;

    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Hash;
    use App\Models\Admin;

    class AuthController extends Controller
    {
        public function login(Request $request)
        {
            $admin = Admin::where('username', $request->username)->first();

            if (!$admin || !Hash::check($request->password, $admin->password)) {
                return response()->json(['message' => 'Invalid credentials'], 401);
            }

            $token = $admin->createToken('admin-token')->plainTextToken;

            return response()->json([
                'message' => 'Login success',
                'token' => $token,
                'admin' => $admin
            ]);
        }
    }
