<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;

use App\Models\User;
use App\Http\Controllers\MailController;
use App\Http\Controllers\Api\UserController;
use App\Models\emails;
use App\Models\emailed_users;
use App\Models\blog_catagory;
use App\Models\blogs;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function(){
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class,'logout']);

    Route::post('/get-user', function(Request $request){
        $user = User::find($request['id']);
        return $user;
    });

    Route::post('/update-user-name', function(Request $request){
        $user = User::find($request['id']);
        $user->fill(['name'=>$request['name'], 'department'=>$request['dept']])->save();
    });
    Route::post('/update-user-profile', function(Request $request){
        $user = User::find($request['id']);
        if($user->profile_image != null){
            $path = 'image/profile/'.$user->profile_image;
            if(File::exists($path)){
                File::delete($path);
            }
        }
        $image = $request->file('image');
        $name = time().'.'.$image->getClientOriginalExtension();
        $image->move('image/profile',$name);
        
        $user->fill(['profile_image'=>$name])->save();
        return response()->json(['success'=> 'image name is : '.$name]);
    });
    
    Route::post('/update-user-links', function(Request $request){
        $user = User::find($request['id']);
        $user->fill(['linked_in'=>$request['linked_in'], 'git'=>$request['git']])->save();
        
        return response()->json(['success'=> $user]);
    });
    Route::post('/update-user-contact', function(Request $request){
        $user = User::find($request['id']);
        $user->fill(['s_id'=>$request['s_id'], 'session'=>$request['session'], 'phone'=>$request['phone'], 'passing_year'=>$request['passingYear']])->save();
        
        return response()->json(['success'=> $user]);
    });

    Route::get('/requested-user', function () {
        $users = DB::table('users')
            ->where('cpc_position','=',null)
            ->orderBy('id', 'desc')
            ->get();
    
        return $users;
    });

    Route::get('/team-user', function () {
        $users = DB::table('users')
            ->where('cpc_position','=','Team')
            ->orderBy('id', 'desc')
            ->get();
    
        return $users;
    });
    Route::get('/advisor-user', function () {
    
        $users = DB::table('users')
            ->where('cpc_position','=','Advisor')
            ->orderBy('id', 'desc')
            ->get();
    
        return $users;
    });

    Route::get('/member-user', function () {
        $users = DB::table('users')
            ->where('cpc_position','!=','Advisor')
            ->orderBy('id', 'desc')
            ->get();
    
        return $users;
        
        // ->where('s_id','NOT LIKE','19____')
    });
    Route::post('/member-user-query', function (Request $request) {
        $yy = $request['year'];
        $dd = $request['dept'];
        $ss = $request['serial'];
        $qq = '';
        if($yy == null){
            $qq = '__';
        }else{
            $qq = $yy;
        }
        if($dd == null){
            $qq = $qq.'__';
        }else{
            $qq = $qq.$dd;
        }
        if($ss == null){
            $qq = $qq.'__';
        }else{
            $qq = $qq.$ss;
        }
        $users = DB::table('users')
            ->where('cpc_position','!=','Advisor')
            ->where('s_id','LIKE',$qq)
            ->orderBy('id', 'desc')
            ->get();
        return $users;
    });
    // User Query common
    Route::post('/user-query', function (Request $request) {
        $uu = $request['u_type'];
        $yy = $request['year'];
        $dd = $request['dept'];
        $ss = $request['serial'];
        $qq = '';
        if($yy == null){
            $qq = '__';
        }else{
            $qq = $yy;
        }
        if($dd == null){
            $qq = $qq.'__';
        }else{
            $qq = $qq.$dd;
        }
        if($ss == null){
            $qq = $qq.'__';
        }else{
            $qq = $qq.$ss;
        }

        $users = DB::table('users')
            ->where('cpc_position','LIKE',$uu)
            ->where('s_id','LIKE',$qq)
            ->orderBy('id', 'desc')
            ->get();
        return $users;
        
    });

    Route::post('/mailed-user-query', function (Request $request) {

        $user_id = DB::table('emailed_users')
            ->where('email_id',$request['mail_id'])
            ->orderBy('id', 'desc')
            ->get();
        $users = array();
        foreach($user_id as $id){
            $user = User::find($id->user_id);
            array_push($users, $user);
        }
        return $users;
        
    });

    Route::post('/approve-user', function(Request $request){
        $user = User::find($request['id']);
        $user->fill(['cpc_position'=>$request['position']])->save();
        MailController::signup_approve_mail($request['email']);
    });
    Route::post('/remove-from-team', function(Request $request){
        $user = User::find($request['id']);
        $user->fill(['cpc_position'=>$request['position']])->save();
        // MailController::signup_approve_mail($request['email']);
    });

    // Mails
    Route::get('/all-mails', function () {
        $emails = DB::table('emails')
            ->orderBy('id', 'desc')
            ->get();
        return $emails;
        // ->where('s_id','NOT LIKE','19____')
    });
    Route::post('/delete-mail', function (Request $request) {
        emails::where('id',$request['mail_id'])->delete();
        emailed_users::where('email_id',$request['mail_id'])->delete();
    });

    // Blogs
    Route::post('/add-catagory', function (Request $request) {
        blog_catagory::create([
            'catagory' => $request['catagory']
        ]);
    });
    Route::get('/all-blogs-catagory', function (){
        $catagory = DB::table('blog_catagories')
            ->orderBy('id', 'asc')
            ->get();
        return $catagory;
    });
    Route::post('/blog-post', function (Request $request){
        $bl = blogs::create([
            'blog_title' => $request['title'],
            'blog_content' => $request['content'],
            'catagory_id' => $request['catagory_id'],
            'down_vote' => 0,
            'up_vote' => 0,
            'writter_id' => $request['uid'],
            'is_varified' => 'no',
        ]);
        return response()->json(['success'=> $bl]);
    });
    Route::post('/blog-query', function (Request $request) {
        $type = $request['type'];
        if($type == 'all'){
            $blogs = DB::table('blogs')
                ->where('is_varified', 'yes')
                ->orderBy('id', 'desc')
                ->get();

            foreach($blogs as &$value){
                $value->writter_name = User::find($value->writter_id)->name;
            }
            return $blogs;
        }else if($type == 'requested'){
            $blogs = DB::table('blogs')
                ->where('is_varified', 'no')
                ->orderBy('id', 'asc')
                ->get();
            return $blogs;
        }

        $blogs = DB::table('blogs')
                ->where('is_varified', 'yes')
                ->where('catagory_id',$type)
            ->orderBy('id', 'desc')
            ->get();
        return $blogs;
    });

    Route::post('/delete-blog', function(Request $request){
        blogs::find($request['id'])->delete();
    });

    Route::post('/update-blog', function(Request $request){
        $blog = blogs::find($request['id']);
        $blog->fill([$request['field']=>$request['value']])->save();
    });
});

Route::apiResource('/users', UserController::class);


Route::post('/signup', [AuthController::class,'signup']);

Route::get('/dept-name', function () {
    $users = DB::table('dept_name')
        ->orderBy('id', 'asc')
        ->get();
    return $users;
});
Route::post('/login', [AuthController::class,'login']);

Route::post('/varify', [AuthController::class, 'varify']);

Route::post('/send-mail',[MailController::class,'email_varification']);
Route::post('/common-mail',[MailController::class,'common_mail']);
Route::post('/common-mail-data-store',[MailController::class,'store_mail_data']);
Route::post('/send-mail-success',[MailController::class,'email_varification_success']);
Route::post('/send-mail-rejected',[MailController::class,'signup_rejected_mail']);