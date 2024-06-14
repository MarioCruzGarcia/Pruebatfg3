<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function sendEmail(Request $request)
    {
        $to = $request->input('to');
        $subject = $request->input('subject');
        $text = $request->input('text');

        Mail::raw($text, function($message) use ($to, $subject) {
            $message->to($to)
                    ->subject($subject);
        });

        return response()->json(['message' => 'Email sent successfully'], 200);
    }
}
